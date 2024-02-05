package com.example.velog_back.controller;


import com.example.velog_back.dto.ArticleRequestDto;
import com.example.velog_back.dto.ArticleResponseDto;
import com.example.velog_back.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/articles")
//@CrossOrigin(origins = "https://velogram.netlify.app/")
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping("/create")
    public ResponseEntity<Void> createArticle(@RequestBody ArticleRequestDto requestDto){
        articleService.createArticle(requestDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/get")
    public ResponseEntity<List<ArticleResponseDto>> getAllArticles() {
        List<ArticleResponseDto> articles = articleService.getAllArticles();
        if (!articles.isEmpty()) {
            return ResponseEntity.ok(articles);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<ArticleResponseDto> getArticles(@PathVariable Long id) {
        ArticleResponseDto articles = articleService.getArticle(id);
        return ResponseEntity.ok(articles);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteArticles(@PathVariable Long id) {
        articleService.deleteArticle(id);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Void> updateArticle(@PathVariable Long id, @RequestBody ArticleRequestDto requestDto){
        articleService.updateArticle(id, requestDto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
