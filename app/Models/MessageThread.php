<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MessageThread extends Model
{
    use HasFactory;
    use UUID;

    protected $fillable = [];

    public function messages(): HasMany {
        return $this->hasMany(Message::class);
    }
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
    public function boble(): BelongsTo {
        return $this->belongsTo(Boble::class);
    }
}
